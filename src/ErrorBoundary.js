import React, { useState } from "react";

function ErrorBoundary() {
  const [error, SetError] = useState(null);
  const [errorInfo, SetErrorInfo] = useState(null);
  return <div>ErrorBoundary</div>;
}

export default ErrorBoundary;
