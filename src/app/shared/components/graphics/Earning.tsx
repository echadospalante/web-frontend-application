import React, { useState } from 'react';

import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getChartColorsArray = (colors: any) => {
  colors = JSON.parse(colors);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return colors.map(function (value: any) {
    const newValue = value.replace(' ', '');
    if (newValue.indexOf(',') === -1) {
      let color = getComputedStyle(document.documentElement).getPropertyValue(
        newValue,
      );

      if (color.indexOf('#') !== -1) color = color.replace(' ', '');
      if (color) return color;
      else return newValue;
    } else {
      const val = value.split(',');
      if (val.length === 2) {
        let rgbaColor = getComputedStyle(
          document.documentElement,
        ).getPropertyValue(val[0]);
        rgbaColor = 'rgba(' + rgbaColor + ',' + val[1] + ')';
        return rgbaColor;
      } else {
        return newValue;
      }
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Earning = ({ dataColors }: any) => {
  const apexlineColors = getChartColorsArray(dataColors);

  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: !1,
      },
      dropShadow: {
        enabled: !0,
        color: '#000',
        top: 18,
        left: 7,
        blur: 8,
        opacity: 0.2,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    colors: apexlineColors,
    stroke: {
      curve: 'smooth',
      width: 3,
    },
  };

  const series: ApexNonAxisChartSeries = [10, 41, 35, 51, 49, 62, 69, 91, 148];

  /*
  call api action to receive data
  */
  //   useEffect(() => {
  //     dispatch(getEarningChartsData("jan"));
  //   }, [dispatch]);

  const [seletedMonth, setSeletedMonth] = useState('jan');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeMonth = (value: any) => {
    setSeletedMonth(value);
    // dispatch(getEarningChartsData(value));
  };

  return (
    <React.Fragment>
      <Col xl="8">
        <Card>
          <CardBody>
            <div className="clearfix">
              <div className="float-end">
                <div className="input-group input-group-sm">
                  <select
                    className="form-select form-select-sm"
                    value={seletedMonth}
                    onChange={(e) => {
                      onChangeMonth(e.target.value);
                    }}
                  >
                    <option value="jan">Ene</option>
                    <option value="dec">Feb</option>
                    <option value="nov">Mar</option>
                    <option value="oct">Abr</option>
                    <option value="oct">May</option>
                    <option value="oct">Jun</option>
                    <option value="oct">Jul</option>
                    <option value="oct">Ago</option>
                  </select>
                  <label className="input-group-text">Mes</label>
                </div>
              </div>
              <h4 className="card-title mb-4">Test</h4>
            </div>

            <Row>
              <Col lg="4">
                <div className="text-muted">
                  <div className="mb-4">
                    <p>Test</p>
                    <h4>$2453.35</h4>
                    <div>
                      <span className="badge badge-soft-success font-size-12 me-1">
                        {' '}
                        + 0.2%{' '}
                      </span>{' '}
                      From previous period
                    </div>
                  </div>

                  <div>
                    <Link to="#" className="btn btn-primary  btn-sm">
                      Ver Detalle
                      <i className="mdi mdi-chevron-right ms-1"></i>
                    </Link>
                  </div>

                  <div className="mt-4">
                    <p className="mb-2">Test</p>
                    <h5>$2281.04</h5>
                  </div>
                </div>
              </Col>

              <Col lg="8">
                <div id="line-chart" dir="ltr">
                  <ReactApexChart
                    series={series}
                    options={options}
                    type="line"
                    height={320}
                    className="apex-charts"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Earning;
