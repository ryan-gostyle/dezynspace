import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class SectionSix extends Component {
    render() {
        return (
            <div className="col-24 section-six" style={{overflow:'hidden',height:'1350px'}} >
            <Row style={{zIndex:'5'}}>
                <Col xs={24} sm={24} md={24} lg={24} className="column-padding " >
                        <h1 className="title" style={{fontSize:"2.5em!important"}}>Save Time Looking For the Perfect Graphic Designer</h1>
                        <h3 className="sub-title" style={{fontSize:"1.em!important"}}>Revolutionize your business by renting a dedicated graphic designer today!</h3>                 
                            <div className="img-container" style={{marginTop:'70px'}}>
                            {/*add this!! marginTop:'30px' */}
                            <Row className="container">
                            {/*img size for mobile!! width: 50px; height: 50px; */}
                                <Col xs={24} sm={24} md={8} lg={8}>
                                <iframe width="350" height="250"  src="https://www.youtube.com/embed/2aYPbeBZrG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                <iframe width="350" height="250" src="https://www.youtube.com/embed/2aYPbeBZrG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                <iframe width="350" height="250"  src="https://www.youtube.com/embed/2aYPbeBZrG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                                </Col>

                            </Row>
                            </div>

                </Col>
                <Col xs={24} sm={24} md={24} lg={24} className="column-padding categories" >
                        <h2>Here’s what our designers can do for you</h2>
                        <h6>Your vision has no limit, neither do the kinds of designs we can deliver for you </h6>
                        <Row>
                            {/*img size for mobile!! width: 50px; height: 50px; */}
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover1" type="button">
                                    Infographics
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover1">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                <Button id="UncontrolledPopover2" type="button">
                                    Posters
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover2">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover3" type="button">
                                    Web Banners
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover3">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover1" type="button">
                                    PowerPoint Design
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover1">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                <Button id="UncontrolledPopover2" type="button">
                                Flyers
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover2">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover3" type="button">
                                    Brochures
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover3">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover1" type="button">
                                    Social Media Posts
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover1">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                <Button id="UncontrolledPopover2" type="button">
                                T-shirt Design
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover2">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover3" type="button">
                                    Logo
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover3">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover1" type="button">
                                    Business Card
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover1">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                <Button id="UncontrolledPopover2" type="button">
                                Website (UI)
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover2">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover3" type="button">
                                    3D
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover3">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover1" type="button">
                                    Packaging
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover1">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                <Button id="UncontrolledPopover2" type="button">
                                Icon
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover2">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover3" type="button">
                                    Newsletter
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover3">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover1" type="button">
                                    Letterhead
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover1">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                <Button id="UncontrolledPopover2" type="button">
                                Illustration
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover2">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Button id="UncontrolledPopover3" type="button">
                                    Design App Mock-up
                                    </Button>
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover3">
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                    </UncontrolledPopover>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                <a href="/" className="title" style={{textDecoration:'underline',margin:'25px 5px'}}>See more</a>
                                </Col>
                            </Row>
                </Col>
                </Row>
                <div className="img-container" style={{zIndex:'2',width:'0',height:'0'}}>
                        <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Path+25.png' className="left-purple" />
                        <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Path+27.png' className="right-purple" />
                </div>
            </div>
        )
    }
}
