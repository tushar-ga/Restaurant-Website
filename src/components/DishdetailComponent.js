import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';



    function RenderComments({comments})
    {
        if (comments!=null)
        {
            const commentList = comments.map((comment) => 
                    { 
                    //Parsing the date in a correct format
                    const date = new Date(Date.parse(comment.date));
                    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
                    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
                    //returning the list items
                        return (<li key={comment.id}>
                            <p>{ comment.comment }</p>
                            <p>--{comment.author}, {mo} {da}, {ye}</p>
                        </li>);
                    });

                return(
                    <div>
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {commentList}
                        </ul>
                    </div>
                    
                );
        }
        else 
        {
            return (<div></div>);
        }
    }
    function RenderDish({dish})
    {
        if (dish!=null)
            {
                return (
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name}/>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>    
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={dish.comments}/>              
                        </div>
                    </div>
                    );
            }
        else 
            {
                return (<div></div>);
            }
    }
    function DishDetail({dish})
    {
        return (
            <div>
                < RenderDish dish={dish}/> 
            </div> 
            );
    }

export default DishDetail;