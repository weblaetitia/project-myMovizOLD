import React, {useState} from 'react';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';
import { Badge } from 'reactstrap';
import { Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faVideo, faStar } from '@fortawesome/free-solid-svg-icons'

const Movies = (props) => {

  var heart = {
    cursor: 'pointer',
    color: 'grey',
    transitionDuration: '.5s',
    '&:hover': {
      color: 'pink'
    }
  }

  var movieCamera = {
    cursor: 'pointer',
    color: 'grey',
    transitionDuration: '.5s',
    '&:hover': {
      color: 'lightgoldenrodyellow'
    }
  }

  var starIcon = {
    cursor: 'pointer',
    color: 'grey',
    transitionDuration: '.5s',
    '&:hover': {
      color: 'lightgoldenrodyellow'
    }
  }

  // Like btn
  const [like, setLike] = useState(false)
  var clickLike = () => {
    if (like === false) {
      setLike(true)
    } else {
      setLike(false)
    }
  }
  if (like === true) {
    heart.color = '#e74c3c'
  } else if (like === false) {
    heart.color = 'grey'
  }

  // movie icon
  const [watch, setWatch ] = useState(0)
  var clickWatch = () => {
    setWatch(watch+1)
  }
  if (watch > 0) {
    movieCamera.color = 'gold'
  }



  const globalCount = []
  for (var i=0; i<10; i++) {
    if (i>= props.globalCountRating) {
      globalCount.push(<FontAwesomeIcon icon={faStar} style={starIcon} />)
    } else {
      globalCount.push(<FontAwesomeIcon  style={{color:'gold'}} icon={faStar} />)
    }
  }

  return (
    <Col xs="12" md="6" lg="4">
      <Card className="mb-3">
      <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
      <CardBody>
        <CardText>
            <p className="font-weight-bold">{props.movieName}</p>
            <p className="mb-0">
              Like <FontAwesomeIcon icon={faHeart} style={heart} onClick={ () => clickLike() }/>
            </p>
            <p className="mb-0">
              Nombre de vues <FontAwesomeIcon icon={faVideo} style={movieCamera} onClick={ () => clickWatch() } />
              <Badge className="ml-2" color="secondary">{watch}</Badge>
            </p>
            <p className="mb-0">
              Mon avis <FontAwesomeIcon icon={faStar} style={starIcon} />
              <Badge className="ml-2" color="secondary">-1</Badge><Badge className="ml-2" color="secondary">+1</Badge>
            </p>
            <p className="mb-0">
              Avis global {globalCount} ({props.globalCountRating})
              </p>
            <p>{props.movieDesc}</p>
        </CardText>
      </CardBody>
    </Card>
  </Col>
  );
};

export {Movies};