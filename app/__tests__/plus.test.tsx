import BoxScore from '@/components/shared/BoxScore';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';



// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Only adds plus to active players.', async () => {
  const {getByTestId, getByText} = render(
    <BoxScore />,
  ); 
      
  expect(screen.getByTestId("plus-player-1").textContent).toEqual("90")
  expect(screen.getByTestId("plus-player-6").textContent).toEqual("20")
  await screen.getByTestId("2P-button-player-2").click()
  expect(screen.getByTestId("plus-player-1").textContent).toEqual("92")
  expect(screen.getByTestId("plus-player-6").textContent).toEqual("20")
  
  

});