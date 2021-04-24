import React from "react"
import { Col, Row } from "react-bootstrap"

const ManageProducts = (props) => {
  var [name, setName] = React.useState(null)
  var [desc, setDesc] = React.useState(null)
  var [price, setPrice] = React.useState(null)
  var [pic, setPic] = React.useState(null)

  const imageupload = (element) => {
    const reader = new FileReader();
    if(element[0]) {
      reader.readAsDataURL(element[0]);
      reader.onload = () => {
        var Base64 = reader.result;
        // console.log(Base64);
        setPic(Base64);
      };
      reader.onerror = (error) => {
        console.log("error: ", error);
      };
    }
    
  }

  const addproduct = () => {
    var currentList = JSON.parse(localStorage.getItem("data")) 
    var newitem = {
      name,
      desc,
      price,
      pic
    }
    currentList.push(newitem)
    localStorage.setItem('data', JSON.stringify(currentList))

    setName("")
    setDesc("")
    setPrice("")
    setPic("")
  }

  return (
    <div className="Bodylayout">
    <Row style={{width: "100%"}}>
      <Col className="col-6">
        <Row className="col-12 my-4">
          <div className="fieldName">Product Name</div>
          <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name"></input>
        </Row>
        <Row className="col-12 my-4">
          <div>
            <span className="fieldName">Product Description</span>
            <span className="MutedText"> (Optional)</span>
          </div>
          <textarea class="form-control" placeholder="Enter description" value={desc} onChange={(e) => setDesc(e.target.value)}  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></textarea>
        </Row>
      </Col>

      <Col className="col-6">
        <Row className="col-12 my-4">
          <div className="fieldName">Price</div>
          <input type="text" class="form-control" value={price} placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} ></input>
        </Row>
        <Row className="col-12 my-4">
          <div>
            <span className="fieldName">Product Image</span>
            <span className="MutedText"> (Optional)</span>
          </div>
          {/* input field */}
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="Image" aria-describedby="inputGroupFileAddon03" onChange={(e) => imageupload(e.target.files)} aria-label="Upload"/>
          </div>
        </Row>
      </Col>
    </Row>

    <div style={{width: "100%", display: 'flex', justifyContent: "flex-start"}}>
    <button type="button" class="btn AddProductButton" onClick={() => addproduct()}>Add Product</button>
    </div>

    </div>
  )
}

export default ManageProducts;