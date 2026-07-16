import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { trackPageView } from '../analytics';

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location);
  }, [location]);

  return null;
}

export default Analytics;
