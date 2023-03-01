import styles from "./aboutContainer.module.scss";

function AboutContainer(input: {
  img_url: string;
  position1?: number;
  position2?: number;
  children?: [JSX.Element];
}): JSX.Element {
  let img: string =
    'linear-gradient(to bottom , rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.75), rgba(0,0,0,1)), url("' +
    input.img_url +
    '") no-repeat';
  let position: string =
    input.position1 && input.position2
      ? input.position1.toString() + "% " + input.position2.toString() + "%"
      : "50% 50%";
  return (
    <div className={styles.reponsiveContainer}>
      <div
        style={{
          background: `${img}`,
          backgroundPosition: position,
          backgroundSize: "cover",
          height: "100",
        }}
      >
        <div className={styles.profile_card}>{input.children}</div>
      </div>
    </div>
  );
}

export default AboutContainer;
