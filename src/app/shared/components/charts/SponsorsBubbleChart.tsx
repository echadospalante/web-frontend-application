import { useEffect, useRef, useState } from 'react';

import * as d3 from 'd3';
import { VentureSponsorship } from 'echadospalante-domain';

import useSponsorshipsOwners from '../../../modules/admin/general/hooks/useSponsorshipsOwners';

interface BubbleData {
  name: string;
  ownerId: string;
  value: number;
}

interface SponsorsBubbleChartProps {
  items: VentureSponsorship[];
}

const SponsorsBubbleChart: React.FC<SponsorsBubbleChartProps> = ({ items }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const { loading, owners, fetchAllSponsorshipsOwners } = useSponsorshipsOwners(
    items.map((item) => item.id),
  );
  const [data, setData] = useState<BubbleData[]>([]);

  useEffect(() => {
    if (loading) return;

    setData(
      owners.map(({ owner, id }) => ({
        name: owner.firstName + ' ' + owner.lastName,
        value: items.find((item) => item.id === id)?.monthlyAmount || 0,
        ownerId: owner.id,
      })),
    );
  }, [loading, owners]);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 800;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const root = d3.pack<BubbleData>().size([width, height]).padding(3)(
      d3.hierarchy({ children: data } as any).sum((d: any) => d.value),
    );

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove(); // Limpiar el SVG antes de redibujar

    const node = svg
      .selectAll('g')
      .data(root.leaves())
      .join('g')
      .attr('transform', (d: any) => `translate(${d.x},${d.y})`);

    node
      .append('circle')
      .attr('r', (d: any) => d.r)
      .attr('fill', (_: any, i: any) => color(i.toString()));
    // .on("click", function (d: any) {});

    node
      .append('text')
      .attr('dy', '0.3em')
      .attr('text-anchor', 'middle')
      .style('font-size', (d: any) =>
        Math.min((3 * d.r) / d.data.name?.length, 14),
      )
      .style('font-weight', '600')
      .html((d: any) => {
        const { name, ownerId } = d.data;
        return `<a target="_blank" href="/principal/perfiles/${ownerId}">
        ${name}
        </a>`;
      });

    node
      .append('text')
      .attr('dy', '1.8em')
      .attr('text-anchor', 'middle')
      .style('font-size', (d: any) =>
        Math.min((2 * d.r) / d.data.name?.length, 17),
      )
      .text((d: any) => 'USD $' + d.data.value?.toFixed(2));
  }, [data]);

  return <svg style={{ width: '100%' }} ref={svgRef}></svg>;
};

export default SponsorsBubbleChart;
