import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Page(props) {
  const { page } = useParams();

  const isPrevPage = props.number === '<';
  const isNextPage = props.number === '>';
  const isLastPage = props.number === '>>';
  const isFirstPage = props.number === 1;

  const pageStyles = {
    backgroundColor: page == props.number ? '#DC4C4C' : '#0C0B10',
    borderColor: page == props.number ? '#DC4C4C' : '#FFF',
    cursor: page == props.number ? 'default' : 'pointer',
  };

  const linkTo = page == props.number ? null : isPrevPage
  ? `/Main/${parseInt(page) - 1}` : isNextPage
  ? `/Main/${parseInt(page) + 1}` : isLastPage
  ? `/Main/${parseInt(page) + 10}`: isFirstPage
  ? `/Main/1` : `/Main/${props.number}`;

  return (
    <Link to={linkTo}>
      <div className="Page" style={pageStyles}>
        <p>{props.number}</p>
      </div>
    </Link>
  );
}
