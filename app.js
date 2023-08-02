var count = 0; //-- used in collide-detect component

//-- add to the oculus touch controller html --
AFRAME.registerComponent('trigger-check', {
  //dependencies: ['raycaster'],

  init: function () {
       
    var debugtxt = document.querySelector('a-text');
   
    //-- trigger button pressed
    this.el.addEventListener('triggerdown', function (e) {
        
        controllershoot();
        console.log('estoy en el tocuh controller')
    });
  },
  
  
});

//-- add this to any element you want to remove on collision --
//-- put class="target" to your targets
AFRAME.registerComponent('collide-detect', {
  init: function () {
    var bulletEl = this.el;
   
    var debugtxt = document.querySelector('a-text');
    
    this.el.addEventListener('collide', function(e){
      if(e.detail.body.el.className == 'target') {        
        try{
          
          e.detail.body.el.parentNode.removeChild(e.detail.body.el);
          count++;
          debugtxt.setAttribute('value', 'count: ' + count);
          console.log('estoy en collide-detect   collide if')
          
        } catch (err){ }
      } 
      try {
        bulletEl.parentNode.removeChild(e.detail.target.el);
      }catch(err){}
      
         
    });
  },
  
  
});