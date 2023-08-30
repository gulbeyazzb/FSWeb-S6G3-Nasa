import "./content.css";

const Content = (props) => {
  const { date, hdurl, title } = props;
  return (
    <div className="container">
      <div className="img-container">
        <img src={hdurl} />
      </div>
      <table>
        <tr>
          <td className="date-container">{date}</td>
          <td className="date-container">{title}</td>
        </tr>
      </table>
    </div>
  );
};

export default Content;
