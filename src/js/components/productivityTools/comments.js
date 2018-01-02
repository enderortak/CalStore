import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

const CommentLayout = ({
  name, time, text, children,
}) => (
  <Comment>
    <Comment.Avatar as="a" src="http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png" />
    <Comment.Content>
      <Comment.Author as="a">{name}</Comment.Author>
      <Comment.Metadata>
        <span>{time}</span>
      </Comment.Metadata>
      <Comment.Text>{text}</Comment.Text>
      <Comment.Actions>
        <a>Reply</a>
      </Comment.Actions>
    </Comment.Content>
    {children}
  </Comment>
);

const Comments = () => (
  <Comment.Group threaded>
    <Header as="h3" dividing>Comments</Header>

    <CommentLayout name="Matt" time="Today at 5:42PM" text="How artistic!" />
    <CommentLayout name="Elliot Fu" time="Yesterday at 12:30AM" text="This has been very useful for my research. Thanks as well!" >
      <Comment.Group>
        <CommentLayout name="Jenny Hess" time="Just now" text="Thanks Elliot :)" />
      </Comment.Group>
    </CommentLayout>
    <CommentLayout name="Joe Henderson" time="5 days ago" text="Dude, this is awesome. Thanks so much" />
    <Form reply>
      <Form.TextArea style={{ height: "5em" }} />
      <Button size="small" content="Add Comment" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);

export default Comments;
