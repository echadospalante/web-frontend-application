import React, { useEffect, useState } from 'react';

import ReactApexChart from 'react-apexcharts';
import { useDispatch } from 'react-redux';
import { Card, CardBody, Col, Table } from 'reactstrap';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getChartOptions = (index: any) => {
  const options = {
    chart: { sparkline: { enabled: !0 } },
    dataLabels: { enabled: !1 },
    colors: ['#556ee6'],
    plotOptions: {
      radialBar: {
        hollow: { margin: 0, size: '60%' },
        track: { margin: 0 },
        dataLabels: { show: !1 },
      },
    },
  };
  switch (index) {
    case 1:
      options['colors'][0] = '#556ee6';
      break;
    case 2:
      options['colors'][0] = '#34c38f';
      break;
    case 3:
      options['colors'][0] = '#f46a6a';
      break;
    default:
      break;
  }

  return options;
};

const TotalSelling = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sellingData] = useState<any[]>([
    {
      id: 1,
      name: 'Test A',
      desc: 'From previous period',
      value: 67,
    },
    {
      id: 2,
      name: 'Test B',
      desc: 'From previous period',
      value: 84,
    },
    {
      id: 3,
      name: 'Test C',
      desc: 'From previous period',
      value: 63,
    },
  ]);

  useEffect(() => {
    // dispatch(getTopSellingProduct("jan"));
  }, [dispatch]);

  const [seletedMonth, setSeletedMonth] = useState('jan');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeMonth = (value: any) => {
    setSeletedMonth(value);
    // dispatch(getTopSellingProduct(value));
  };

  return (
    <React.Fragment>
      <Col xl="4">
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
                    <option value="jan">Jan</option>
                    <option value="dec">Dec</option>
                    <option value="nov">Nov</option>
                    <option value="oct">Oct</option>
                  </select>
                  <label className="input-group-text">Month</label>
                </div>
              </div>
              <h4 className="card-title mb-4">Test</h4>
            </div>

            <div className="text-muted text-center">
              <p className="mb-2">Test A</p>
              <h4>$ 6385</h4>
              <p className="mt-4 mb-0">
                <span className="badge badge-soft-success font-size-11 me-2">
                  {' '}
                  0.6% <i className="mdi mdi-arrow-up" />{' '}
                </span>{' '}
                From previous period
              </p>
            </div>

            <div className="table-responsive mt-4">
              <Table className="table align-middle mb-0">
                <tbody>
                  {(sellingData || []).map((data, key) => {
                    const options = getChartOptions(key + 1);
                    return (
                      <tr key={key}>
                        <td>
                          <h5 className="font-size-14 mb-1">{data.name}</h5>
                          <p className="text-muted mb-0">{data.desc}</p>
                        </td>

                        <td>
                          <div id="radialchart-1">
                            <ReactApexChart
                              options={options}
                              series={[data.value]}
                              type="radialBar"
                              height={60}
                              width={60}
                              className="apex-charts"
                            />
                          </div>
                        </td>
                        <td>
                          <p className="text-muted mb-1">Test</p>
                          <h5 className="mb-0">{data.value} %</h5>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default TotalSelling;
