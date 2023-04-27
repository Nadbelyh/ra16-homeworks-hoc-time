import Video from "./video";
import Article from "./article";
import { nanoid } from "nanoid";
import WithHighlight from "./withHighlight";

function VideoList(props) {
  const ItemVideo = WithHighlight(Video);
  const ItemArticle = WithHighlight(Article);

  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        return <ItemVideo {...item} key={nanoid()} />;
      case "article":
        return <ItemArticle {...item} key={nanoid()} />;
    }
  });
}

export default VideoList;
