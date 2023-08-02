import React, { Children, Component } from "react";
import ChildrenComp from "./ChildrenComp";

class ParentComp extends Component {
    // Props:
    // Props là viết tắt của properties
    // Dùng để lưu trữ các attributes
    // Giúp cho việc truyền dữ liệu từ components cha đến components con
    // => giúp cho việc giao tiếp giữa các components với nhau
    // Giá trị của props không thay đổi

    // Parent => Childrent
    render() {
        const greeting = "Welcome to RA!";
        const person = {
            name: "Khanh",
            age: 23,
        };
        return (
            <div>
                <h2>Parent Components</h2>
                <ChildrenComp mess={greeting} course={"ReactJS!"} person={person}>
                    Hello World!
                </ChildrenComp>
            </div>
        );
    }
}

export default ParentComp;
