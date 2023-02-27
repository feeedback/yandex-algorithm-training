import { test, expect } from '@jest/globals';
import fn from './1.js';

test('1', () => {
  expect(fn('Hello, world!')).toStrictEqual(
    `     #   
     ##  
#########
!,Hdelorw`
  );
});

test('2', () => {
  expect(
    fn(`Twas brillig, and the slithy toves
Did gyre and gimble in the wabe;
All mimsy were the borogoves,
And the mome raths outgrabe.`)
  ).toStrictEqual(
    `         #              
         #              
         #              
         #              
         #              
         #         #    
         #  #      #    
      #  # ###  ####    
      ## ###### ####    
      ##############    
      ##############  ##
#  #  ############## ###
########################
,.;ADTabdeghilmnorstuvwy`
  );
});
