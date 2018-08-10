import React from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

class Home extends React.Component {
  state = {
    'caseStudies': []
  };

  componentWillMount() {
    const client = createClient({
      'space': process.env.REACT_APP_SPACE_ID,
      'accessToken': process.env.REACT_APP_ACCESS_TOKEN
    });

    client
      .getEntries({})
      .then(response => {
        this.setState({
          'caseStudies': response.items
        });
      })
      .catch(console.error);
  }

  render() {
    if (!this.state.caseStudies.length) return <p>No Case Studies found</p>;

    return this.state.caseStudies.map(study => {
      return (
        <div key={study.sys.id}>
          <Link to={`post/${study.sys.id}`}>
            {study.fields.clientName}
          </Link>
        </div>
      );
    });
  }
}

export default Home;
