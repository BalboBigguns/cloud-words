const generateCloudSpread = (wordCount: number) => {
  const gridSize = 80 / wordCount;
  const verticalNodes = [];
  const horizontalNodes = [];

  for (let i = 0; i < wordCount; i++) {
    verticalNodes.push(gridSize * i + 10);
    horizontalNodes.push(gridSize * i);
  }

  const positions = [];

  for (let i = 0; i < wordCount; i++) {
    const [verticalPosition] = verticalNodes.splice(
      ~~(verticalNodes.length * Math.random()),
      1
    );
    const [horizontalPosition] = horizontalNodes.splice(
      ~~(horizontalNodes.length * Math.random()),
      1
    );

    positions.push({ x: horizontalPosition, y: verticalPosition });
  }

  return positions;
};

export default generateCloudSpread;
