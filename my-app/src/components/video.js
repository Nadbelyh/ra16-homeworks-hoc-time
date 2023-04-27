import DateTime from "./dateTime";
import DateTimePretty from "./dateTimePrettyComponent ";

function Video(props) {
  const DateTimePrettyComponent = DateTimePretty(DateTime);
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        title={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className="views">Просмотров: {props.views}</p>
        <DateTimePrettyComponent date={props.date} />
      </div>
    </div>
  );
}

export default Video;
