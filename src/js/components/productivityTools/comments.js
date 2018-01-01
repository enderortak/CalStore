import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

const Comments = () => (
  <Comment.Group threaded>
    <Header as="h3" dividing>Comments</Header>

    <Comment>
      <Comment.Avatar as="a" src="http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png" />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <span>Today at 5:42PM</span>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as="a" src="http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png" />
      <Comment.Content>
        <Comment.Author as="a">Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <span>Yesterday at 12:30AM</span>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>

      <Comment.Group>
        <Comment>
          <Comment.Avatar as="a" src="http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png" />
          <Comment.Content>
            <Comment.Author as="a">Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <span>Just now</span>
            </Comment.Metadata>
            <Comment.Text>Thanks Elliot :)</Comment.Text>
            <Comment.Actions>
              <a>Reply</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar as="a" src="http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png" />
      <Comment.Content>
        <Comment.Author as="a">Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <span>5 days ago</span>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea style={{ height: "5em" }} />
      <Button size="small" content="Add Comment" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);

export default Comments;
