import React from "react";
import { Scan } from "../../api/dto";
import { Spinner, InputGroup, FormControl } from "react-bootstrap";

interface ScanDetailProps {
  scan: Scan | undefined;
}

const ScanDetail: React.FunctionComponent<ScanDetailProps> = ({ scan }) => {
  return (
    <div>
      {scan === undefined ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h1 className="text-center mb-4">Scan #{scan.id}</h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: 20
            }}
          >
            <div>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>Time</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value={scan.scan_time.toFormat("FF")} disabled />
              </InputGroup>
            </div>
            <div>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>Network Id</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value={scan.network_id} disabled />
              </InputGroup>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ScanDetail;
