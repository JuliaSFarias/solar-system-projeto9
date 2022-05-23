import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;

    return (
      <div className="title-box">
        <h2 className="title-text">{ headline }</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired, // como headline não possui um valor padrão definido, é necessário definir como obrigatório um tipo.
};

export default Title;
