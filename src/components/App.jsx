import Count from './Count';
import ClassCount from './ClassCount';
export default function Main() {
    return (
        <div className="main">
            <h1>主标题</h1>
            <div div="content">
                <p className="p1">段落一</p>
                <p className="p2">段落二</p>
            </div>
            <Count />
            <ClassCount />
        </div>
    );
}
