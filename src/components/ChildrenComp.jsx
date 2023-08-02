import React, { Component } from "react";

class ChildrenComp extends Component {
    // State
    // State dùng để lưu trữ dữ liệu trong components
    // => sẽ chỉ có dữ liệu trong components đấy và dữ liệu có thể thay đổi đc
    // Để khai báo state cần phải khởi tại lớp => constructor()
    // Sử dụng super() => để gọi lớp cha
    constructor() {
        super();
        // Khai báo state
        this.state = {
            students: "Khanh",
            question: "Hát hay ko?",
            answer: "Có",
            toggle: true,
        };
        this.handleChangeState = this.handleChangeState.bind(this);
    }
    // Arrow function (ko cần định nghĩa từ khóa this)
    // handleChangeState = () => {
    //     this.setState({
    //         answer: "Không",
    //     });
    // };

    // khi sử dụng function thường cần phải định nghĩa từ khóa this
    handleChangeState() {
        this.setState({
            answer: "Không",
        });
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle,
        });
    };
    render() {
        return (
            <div>
                <h3>Props</h3>
                <p>
                    {this.props.mess} - Course: {this.props.course} - {this.props.children}
                </p>
                <p>
                    Người dùng: {this.props.person.name} - Tuổi: {this.props.person.age}
                </p>
                <h3>State</h3>
                <p>
                    {this.state.students} - Có {this.state.question}
                </p>
                <p>Answer: {this.state.answer}</p>
                <button onClick={this.handleChangeState}>Click me!!</button>

                <h2>Toán tử 3 ngôi trong ReactJS</h2>
                <h3>Có đẹp trai không ?</h3>
                {this.state.toggle ? (
                    <div>
                        <p>Có</p>
                        <button onClick={this.handleToggle}>Click me!!</button>
                    </div>
                ) : (
                    <div>
                        <p>Có có không không</p>
                        <button onClick={this.handleToggle}>Click me!!</button>
                    </div>
                )}
            </div>
        );
    }
}

export default ChildrenComp;
