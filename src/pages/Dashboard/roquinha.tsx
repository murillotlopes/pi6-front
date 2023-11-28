import { SetStateAction, useCallback, useEffect, useState } from 'react';
import { PieChart, Pie } from 'recharts';
import { renderActiveShape } from '../../grafic_shape/grafic_shape';
import { useTitulo } from '../../providers/titulo';

export const Rosquinha = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([] as any)

  const { graficoDashBord } = useTitulo()

  const onPieEnter = useCallback(
    (_: any, index: SetStateAction<number>) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  )

  useEffect(() => {
    buscar()
  }, [])

  const buscar = async () => {
    setData(await graficoDashBord())
  }

  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );

}
