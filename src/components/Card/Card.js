import { Link } from 'react-router-dom';

export const Card = ({ obj }) => {
  const { image, name, location, status } = obj;
  return (
    <div
      className='card position-relative '
      style={{ width: '18rem' }}
    >
      {(function () {
        if (status === 'Alive') {
          return (
            <span
              style={{ top: '10px', right: '10px' }}
              className='position-absolute badge bg-success px-3 py-3'
            >
              {status}
            </span>
          );
        }
        if (status === 'Dead') {
          return (
            <span
              style={{ top: '10px', right: '10px' }}
              className='position-absolute badge bg-danger px-3 py-3'
            >
              {status}
            </span>
          );
        }
        if (status === 'unknown') {
          return (
            <span
              style={{ top: '10px', right: '10px' }}
              className='position-absolute badge bg-secondary px-3 py-3'
            >
              {status}
            </span>
          );
        }
      })()}
      <img
        src={image}
        className='card-img-top'
        alt={name}
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text m-0 fs-5'>Last Location</p>
        <p className='card-text m-0 fs-6'>{location.name}</p>
        <Link
          to={'/Singlecharacter/' + obj.id}
          className='btn btn-primary'
        >
          More
        </Link>
      </div>
    </div>
  );
};
