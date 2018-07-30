(function ($) {
    if ($.fn.slideNumber)
        return;
    //动态生成HTML
    var htmlTemplate = '0<div class="n-slider"><i><i>0</i></i><i><i>1</i></i><i><i>2</i></i><i><i>3</i></i><i><i>4</i></i><i><i>5</i></i><i><i>6</i></i><i><i>7</i></i><i><i>8</i></i><i><i>9</i></i></div>'
    var numTemplate = '<div class="n n0"></div>';
    $.fn.extend({
        "slideNumber": function (digits) {
            var target = this;
            this.setNumber = function (val) {
                for (var k = 0; k < this.length; k++) {
                    var t = this.eq(k),
                        nums = t.find('.n'),
                        value = val.toFixed(0),
                        length = nums.length;
                    for (var i = 0; i < length; i++) {
                        var j = value.length - 1 - i,
                            n = nums.eq(length - 1 - i);
                        if (n.find(".n-slider").length == 0) {
                            n.html(htmlTemplate);
                        }
                        if (j >= 0) {
                            nums.eq(length - 1 - i).removeClass().addClass("n n" + value[j]);
                        }
                    }
                }
            }
            this.init = function (count) {
                var html = '';
                for (var i = 0; i < count; i++) {
                    html += numTemplate;
                }
                this.addClass("nums");
                this.html(html);
                this.find(".n").html(htmlTemplate);
            }
            this.init(digits);
            return this;
        }
    });
})(jQuery);