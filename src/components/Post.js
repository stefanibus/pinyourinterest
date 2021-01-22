import Card from 'react-bootstrap/Card';


const Post = ({ post }) => {
  post.user ? console.log(post.user.email) : console.log("FEHLER");;

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
/* user data*/
  let firstname = "super default firstname";
  let lastname = "super default lastname";
  let email = "super default email";
  /* TODO: find out which user has this id and use the name instead of this id */
  if (post.user) firstname=post.user.firstname;
  if (post.user) lastname=post.user.lastname;
  if (post.user) email=post.user.email;
 
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={image} alt={title} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {firstname} &nbsp;
          {lastname} <br/> 
          {email} 
        </Card.Text>
        <Card.Text>{rating}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Post;
