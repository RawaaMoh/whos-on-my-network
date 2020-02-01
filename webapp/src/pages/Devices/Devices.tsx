import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table, Spinner } from "react-bootstrap";
import { useTitle } from "hookrouter";
import Constants from "../../constants";
import { DeviceSummary } from "../../api/dto";
import { getDevicesByFilter } from "../../api";

const Devices: React.FunctionComponent = () => {
  useTitle(`Devices - ${Constants.title}`);

  const [devices, setDevices] = useState<DeviceSummary[] | undefined>(
    undefined
  );

  useEffect(() => {
    getDevicesByFilter()
      .then(d => setDevices(d))
      .catch(err => console.error(err));
  }, []);

  console.log("devices", devices);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="col-md-10 col-lg-8">
          <h1 className="text-center">Devices: Temporary</h1>
          <div style={{ background: "grey" }}>Filter</div>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>MAC Address</th>
                <th>Name</th>
                {/* <th>Associated Person</th> */}
                <th>Is Primary</th>
                <th>First Seen</th>
                <th>Last Seen</th>
                {/* <th>Note</th> */}
              </tr>
            </thead>
            <tbody>
              {devices !== undefined &&
                devices.map(device => (
                  <tr key={device.id}>
                    <td>{device.mac_address}</td>
                    <td>{device.name}</td>
                    {/* <td>{device. Matched person}</td> */}
                    <td>{device.is_primary ? "Yes" : "No"}</td>
                    <td>{device.first_seen.toFormat("ff")}</td>
                    <td>{device.last_seen.toRelativeCalendar()}</td>
                    {/* <td>{device.note Truncated}</td> */}
                  </tr>
                ))}
            </tbody>
          </Table>

          {devices === undefined && (
            <div style={{ textAlign: "center" }}>
              <Spinner animation="border" />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Devices;
