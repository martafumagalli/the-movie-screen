import React, { Component } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';


class Reviews extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { reviews } = this.props;
    const { activeTab } = this.state;
    if (!reviews[0]) {
      return (<h4>Sorry, No Reviews Yet</h4>);
    }
    return (
      <div className="card reviewcard m-4">
        <Nav className="reviewcard" tabs>
          {reviews.map(({ author }, index) => (
            <NavItem className="py-3 pl-3 font-weight-bold reviewcard" key={index}>
              <NavLink
                className={classnames({ active: activeTab === index })}
                onClick={() => { this.toggle(index); }}
              >
                <span className="blush reviewname">{author}</span>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {reviews.map(({ content }, index) => (
            <TabPane tabId={index} className="p-4" key={index}>
              <Row>
                <Col sm="12" className="">
                  <p className="white my-review">{content}</p>
                </Col>
              </Row>
            </TabPane>
          ))}
        </TabContent>
      </div>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string,
      url: PropTypes.string
    })
  )
};

Reviews.defaultProps = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: '',
      content: '',
    })
  )
};
