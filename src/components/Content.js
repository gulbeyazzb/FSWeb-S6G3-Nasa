import "./content.css";

const Content = (props) => {
  const { date, hdurl, title, explanation } = props;
  return (
    <div className="container">
      <div className="img-container">
        <img src={hdurl} />
      </div>
      <div className="datas">
        <div>
          Date:
          {date}
        </div>
        <div>
          Title:
          {title}
        </div>
        <div>
          Explanation:
          {explanation}
        </div>
      </div>
    </div>
  );
};

export default Content;
