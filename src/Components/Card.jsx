import { useState } from 'react';

const TreeView = ({ randomJsonString, keyName, isRoot = true }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isArray = Array.isArray(randomJsonString);
  const isObject = typeof randomJsonString === 'object' && !isArray;

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ marginLeft: isRoot ? 0 : "20px", borderLeft: "1px solid #ccc", padding: "8px" }}>
      {isArray ? (
        <>
          <span onClick={toggleCollapse} style={{ cursor: "pointer", marginRight: "8px" }}>
            {collapsed ? '►' : '▼'}
          </span>
          <span>{keyName}</span>
          {!collapsed &&
            randomJsonString.map((item, index) => (
              <TreeView key={index} randomJsonString={item} isRoot={false} />
            ))}
        </>
      ) : isObject ? (
        <>
          <span onClick={toggleCollapse} style={{ cursor: "pointer", marginRight: "8px", color: isRoot ? "#ff7b72" : (keyName % 3 === 0 ? "#d2a8ff" : (keyName % 3 === 1 ? "#ff7b72" : "#ffa657")) }}>
            {collapsed ? '►' : '▼'}
          </span>
          <span style={{ color: isRoot ? "#ff7b72" : (keyName % 3 === 0 ? "#d2a8ff" : (keyName % 3 === 1 ? "#ff7b72" : "#ffa657")) }}>{keyName}</span>
          {!collapsed &&
            Object.keys(randomJsonString).map((nestedKey, index) => (
              <TreeView key={index} randomJsonString={randomJsonString[nestedKey]} keyName={nestedKey} isRoot={false} />
            ))}
        </>
      ) : (
        <span style={{
          fontSize: "13.6px",
          fontWeight: "600",
          color: isRoot?"#d2a8ff":"#ff7b72"
        }}>
          {keyName}: {randomJsonString}
        </span>
      )}
    </div>
  );
};

export default TreeView;
