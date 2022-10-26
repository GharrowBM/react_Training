import "../styles/FormationList.css";
import { lessonsList } from "../datas/LessonsList";
import FormationCard from "../components/FormationCard";

export default function FormationList() {
  return (
    <div className="card-container">
      {lessonsList.map((lesson, index) => (
        <div key={index}>
          <FormationCard
            {...lesson}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
