import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const Content = (props) => {
  const { date, hdurl, title, explanation, copyright } = props;
  return (
    <Card
      className="mt-3 w-50 "
      style={{
        left: "25%",
      }}
    >
      <img alt="Sample" src={hdurl} />
      <CardBody className="bg-light">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardBody className="d-flex justify-content-between">
          <div className="d-flex">
            <CardSubtitle className="mb-2" tag="h6">
              Date:
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {date}
            </CardSubtitle>
          </div>
          <div className="d-flex">
            <CardSubtitle className="mb-2" tag="h6">
              copyright:
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {copyright}
            </CardSubtitle>
          </div>
        </CardBody>
        <CardText className="text-start">{explanation}</CardText>
      </CardBody>
    </Card>
  );
};

export default Content;
