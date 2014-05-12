
var PDF = require('..');

describe('#PDF', function(){

  it('should return title', function(done){
    var pdf = PDF(__dirname + '/pdf/basic.pdf');

    pdf.exec(function(err, meta){
      if (err) return done(err);
      meta.title.should.equal('basic');
      done();
    })
  })

  it('should return pages', function(done){
    var pdf = PDF(__dirname + '/pdf/pages.pdf');

    pdf.exec(function(err, meta){
      if (err) return done(err);
      meta.pages.should.equal(6);
      done();
    })
  })

  it('should return tagged', function(done){
    var pdf = PDF(__dirname + '/pdf/pages.pdf');

    pdf.exec(function(err, meta){
      if (err) return done(err);
      meta.tagged.should.equal(false);
      done();
    })
  })

  it('should not crash when a file is not a PDF', function(done){
    var pdf = PDF(__dirname + '/pdf/dummy.txt');

    pdf.exec(function(err, meta){
      if (err) return done(err);
      meta.should.be.a.Object;
      done();
    })
  })

})
