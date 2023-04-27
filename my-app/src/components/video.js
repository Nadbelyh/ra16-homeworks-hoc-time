import DateTime from "./dateTime";
import DateTimePretty from "./dateTimePrettyComponent ";

function Video(props) {
  const DateTimePrettyComponent = DateTimePretty(DateTime);
  return (
    <div className="video">
      <iframe
        src={props.url}
        title={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePrettyComponent date={props.date} />
    </div>
  );
}

export default Video;
