import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon, Input } from "semantic-ui-react";
import "./style.css";

class NavBar extends React.Component {
  render() {
    return (
      <Menu
        pointing
        secondary
        size="massive"
        className={
          this.props.location.pathname === "/" ? "transparent" : "green"
        }
      >
        <Menu.Item name="Eventster" as={Link} to="/" />
        <Input
          icon={<Icon name="search" inverted circular link />}
          placeholder="Search..."
        />
        <Menu.Item
          icon="heart"
          name="favorites"
          as={Link}
          to="/favorites"
          position="right"
        />
        <Menu.Item icon="plus" name="Create Event" href="/create-event" />
        <Menu.Item icon="user" name="Sign In" href="/sign-in" />
      </Menu>
    );
  }
}

export default withRouter(NavBar);
