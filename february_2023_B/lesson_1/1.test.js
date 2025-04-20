import { test } from 'node:test';
import assert from 'node:assert/strict';
import fn from './1.js';

test('1', () => {
  assert.strictEqual(fn('Hello, world!'),
    `     #   
     ##  
#########
!,Hdelorw`
  );
});

test('2', () => {
  assert.strictEqual(
    fn(`Twas brillig, and the slithy toves
Did gyre and gimble in the wabe;
All mimsy were the borogoves,
And the mome raths outgrabe.`),
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
