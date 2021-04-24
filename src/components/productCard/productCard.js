import { Col, Row } from "react-bootstrap"
import "./productCard.scss"

const ProductCard = (props) => {

  return (
    <div className="productContainer">
      <div className="product-Image">
        {props.pic !== undefined ? <img className="productImage" src={props.pic} alt="image"></img> : null}
      </div>

      <Row className="product-info">
        <Col className="col-8 productInfoContr" style={{maxHeight: "100%"}}>
          <div title={props.name} className="productName">
            {props.name}
          </div>
          <div title={props.desc} className="productDesc">
            {props.desc}
          </div>
        </Col>
        <Col className="col-4 productPriceCntr">
          {props.price}
        </Col>
      </Row>
    </div>
  )
}

export default ProductCard;