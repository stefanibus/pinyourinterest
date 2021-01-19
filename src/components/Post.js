import react from "react";
import Card from 'react-bootstrap/Card';


const Post = ({ post }) => {
/* title */
  let title = "super awesome default title";
  if (post.fields.title) title=post.fields.title;
/* description */
  let description = "super awesome default description";
  if (post.fields.description) description=post.fields.description
/* image */
  let image = "holder.js/100px270";
  if (post.fields.webimage) {
    image = post.fields.webimage
  } else if (post.fields.file) {
    image = post.fields.file.fileName
  }
/* rating */
  let rating = 0;
  if (post.fields.rating) rating=post.fields.rating



  return (
    <Card className="bg-dark text-white">
      <Card.Img src={image} alt={title} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>{rating}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Post;