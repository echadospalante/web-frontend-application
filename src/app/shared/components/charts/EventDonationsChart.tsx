import { useEffect, useRef } from 'react';

import * as d3 from 'd3';

import useEventDonators from '../../../modules/principal/ventures/hooks/useEventDonators';
import AlertWithReload from '../alert/AlertWithReload';

interface BubbleData {
  name: string;
  ownerId: string;
  value: number;
  amount: number;
}

interface SponsorsBubbleChartProps {
  eventId: string;
}

const EventDonationsChart: React.FC<SponsorsBubbleChartProps> = ({
  eventId,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const { loading, data, error, refetch } = useEventDonators(eventId);

  useEffect(() => {
    if (!svgRef.current || !data?.items || data.items.length === 0) return;

    const width = 800;
    const height = 800;

    const transformedData: BubbleData[] = data.items.map(
      (item) => ({
        name: `${item.donor.firstName} ${item.donor.lastName}`,
        ownerId: item.donor.id,
        value: item.amount,
        amount: item.amount,
      }),
    );

    const groupedData = transformedData.reduce(
      (acc: { [key: string]: BubbleData }, curr) => {
        const key = curr.ownerId;
        if (acc[key]) {
          acc[key].value += curr.value;
          acc[key].amount += curr.amount;
        } else {
          acc[key] = { ...curr };
        }
        return acc;
      },
      {},
    );

    const finalData = Object.values(groupedData);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Crear la jerarquía para el pack layout
    const root = d3
      .pack<BubbleData>()
      .size([width - 2, height - 2])
      .padding(5)(
      d3
        .hierarchy({ children: finalData } as any)
        .sum((d: any) => d.value)
        .sort((a: any, b: any) => b.value - a.value),
    );

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', width)
      .attr('height', height);

    // Limpiar contenido anterior
    svg.selectAll('*').remove();

    // Crear los nodos
    const node = svg
      .selectAll('g')
      .data(root.leaves())
      .join('g')
      .attr('transform', (d: any) => `translate(${d.x + 1},${d.y + 1})`);

    // Crear círculos
    node
      .append('circle')
      .attr('r', (d: any) => d.r)
      .attr('fill', (_: any, i: number) => color(i.toString()))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('opacity', 0.8)
      .style('cursor', 'pointer')
      .on('mouseover', function () {
        d3.select(this).style('opacity', 1);
      })
      .on('mouseout', function () {
        d3.select(this).style('opacity', 0.8);
      });

    // Agregar texto con el nombre del donante
    node
      .append('text')
      .attr('dy', '-0.2em')
      .attr('text-anchor', 'middle')
      .style('font-size', (d: any) => {
        const fontSize = Math.min(
          (2.5 * d.r) / d.data.name.length,
          Math.max(d.r / 3, 10),
        );
        return `${fontSize}px`;
      })
      .style('font-weight', '600')
      .style('fill', '#333')
      .style('pointer-events', 'none')
      .text((d: any) => d.data.name);

    // Agregar texto con el monto de la donación
    node
      .append('text')
      .attr('dy', '1.2em')
      .attr('text-anchor', 'middle')
      .style('font-size', (d: any) => {
        const fontSize = Math.min((2 * d.r) / 8, Math.max(d.r / 4, 8));
        return `${fontSize}px`;
      })
      .style('font-weight', '500')
      .style('fill', '#666')
      .style('pointer-events', 'none')
      .text((d: any) => {
        const amount = d.data.amount;
        // Formatear el número con separadores de miles
        return `$${amount.toLocaleString('es-CO', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })} COP`;
      });

    // Agregar tooltip
    const tooltip = d3
      .select('body')
      .selectAll('.donation-tooltip')
      .data([null])
      .join('div')
      .attr('class', 'donation-tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.8)')
      .style('color', 'white')
      .style('padding', '8px 12px')
      .style('border-radius', '4px')
      .style('font-size', '12px')
      .style('pointer-events', 'none')
      .style('z-index', 1000);

    node
      .on('mouseover', function (event: any, d: any) {
        tooltip
          .style('opacity', 1)
          .html(
            `
            <strong>${d.data.name}</strong><br/>
            Donación: $${d.data.amount.toLocaleString('es-CO')} COP
          `,
          )
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 10 + 'px');
      })
      .on('mousemove', function (event: any) {
        tooltip
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 10 + 'px');
      })
      .on('mouseout', function () {
        tooltip.style('opacity', 0);
      });

    // Limpiar tooltip al desmontar
    return () => {
      d3.select('body').selectAll('.donation-tooltip').remove();
    };
  }, [data]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '400px' }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <AlertWithReload onReload={refetch} message="Error al cargar las donaciones, por favor intente nuevamente" />
    );
  }

  if (!data?.items || data.items.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        No hay donaciones disponibles para este evento.
      </div>
    );
  }

  return (
    <div className="w-100 d-flex justify-content-center">
      <svg
        style={{
          width: '100%',
          maxWidth: '800px',
          height: 'auto',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
        }}
        ref={svgRef}
      />
    </div>
  );
};

export default EventDonationsChart;
