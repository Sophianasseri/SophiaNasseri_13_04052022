import PropTypes from 'prop-types';

/**
 * Component for rendering bank features
 *
 * @component
 * @example
 * const imgSrc = 'img.png'
 * const alt = 'image alt'
 * const title = 'feature title'
 * const content = 'feature content'
 * return (
 *  <Feature imgSrc={imgSrc} alt={alt} title={title} content={content} />
 * )
 */

const Feature = ({ imgSrc, alt, title, content }) => {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};
export default Feature;

Feature.propTypes = {
  /**
   * Image source path
   */
  imgSrc: PropTypes.string,
  /**
   * Image alt content
   */
  alt: PropTypes.string,
  /**
   * feature title
   */
  title: PropTypes.string,
  /**
   * feature content text
   */
  content: PropTypes.string,
};
