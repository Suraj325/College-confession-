import React, { Component } from "react";
import { Checkbox, Comment } from "semantic-ui-react";

export default class CommentExampleCollapsed extends Component {
  state = { collapsed: true };

  handleCheckbox = (e, { checked }) => this.setState({ collapsed: checked });

  render() {
    const { collapsed } = this.state;

    return (
      <div>
        <Checkbox
          defaultChecked
          label="More comments"
          onChange={this.handleCheckbox}
        />

        <Comment.Group>
          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">Suraj</Comment.Author>
              <Comment.Metadata>
                <span>2 days ago</span>
              </Comment.Metadata>
              <Comment.Text id="commenttext">Hii Lisa!!</Comment.Text>
              <Comment.Actions>
                <a href="/">Reply</a>
                <a class="like" href="/">
                  <i class="like icon"></i> 4 Likes
                </a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>

        <Comment.Group collapsed={collapsed}>
          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">Lisa</Comment.Author>
              <Comment.Metadata>
                <span>2 days ago</span>
              </Comment.Metadata>
              <Comment.Text id="commenttext">
                <b>@Suraj</b> Hello Suraj ❤❤
              </Comment.Text>
              <Comment.Actions>
                <a href="/">Reply</a>
                <a class="like" href="/">
                  <i class="like icon"></i> 4 Likes
                </a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
        <Comment.Group collapsed={collapsed}>
          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">Suresh</Comment.Author>
              <Comment.Metadata>
                <span>2 days ago</span>
              </Comment.Metadata>
              <Comment.Text id="commenttext">
                <b>@Suraj @Lisa</b> Pdhai kr lo bsdiwalo😕
              </Comment.Text>
              <Comment.Actions>
                <a href="/">Reply</a>
                <a class="like" href="/">
                  <i class="like icon"></i> 4 Likes
                </a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </div>
    );
  }
}