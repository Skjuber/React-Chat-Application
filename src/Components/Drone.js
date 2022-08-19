export function generateDrone(member) {
  const drone = new window.Scaledrone("A0UwEce0izDLuIpl", {
    data: member,
  });

  drone.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
  });

  return drone;
}
