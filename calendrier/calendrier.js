var myCalendar = addToCalendar({
    options: {
      class: 'event',
      
      // You can pass an ID. If you don't, one will be generated for you
      id: 'event'
    },
    data: {
      // Event title
      title: 'Get on the front page of HN',
  
    //   Event start date//
      start: new Date('august 19, 2022 18:00'),
      
      // Event timezone. Will convert the given time to that zone
      timezone: french/ciry-salsogne,          
  
      // Event duration (IN MINUTES)
      duration: 120,
      end: new Date('august 19, 2022 19'),
  
      // You can also choose to set an end time
      // If an end time is set, this will take precedence over duration
      // end: new Date('June 15, 2013 23:00'), 
      
      // You can also choose to set 'all day'
      // If this is set, this will override end time, duration and timezone
      // allday:true,
  
      // Event Address
      address: 'fortuna77320@gmail.com',
  
      // Event Description
      description: 'Get on the front page of HN, then prepare for world domination.'
    }
  });
  
  document.querySelector('#place-where-I-want-this-calendar').appendChild(myCalendar);