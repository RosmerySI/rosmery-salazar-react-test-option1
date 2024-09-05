import React, { useEffect } from 'react';
import { getData } from '../../utilities/providers';

export const Product = () => {

  // const [state, setState] = useState();

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      Product
    </div>
  );
};
