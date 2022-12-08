import "./learningOptions.css"
const LearningOptions = (props) => {
    console.log('props',props)
    const options = [
        { text: "About us",
            handler: props.actionProvider.handleAboutUs,
            id: 1 },
        { text: "Our doctors", handler: () => {}, id: 2 },
        { text: "Our Specializations", handler: () => {}, id: 3 },
        { text: "Our Clinics", handler: () => {}, id: 4 },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;

