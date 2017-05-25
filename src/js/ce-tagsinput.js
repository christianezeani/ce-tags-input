(function() {
    var CEMap= new Map();

    window.CETagsInput= function CETagsInput(element) {
        var $element;
        switch(typeof(element)) {
            case 'string': {
                $element= document.querySelector(element);
            } break;
            case 'object': {
                if(element instanceof Element) {
                    $element= element;
                }
            } break;
        }

        if(!$element) {
            throw 'Invalid Element Supplied!';
        } else {
            CEMap.set(this, { $element: $element });
        }
    };

    CETagsInput.prototype.element= function() {
        var obj= CEMap.get(this);
        return obj.$element;
    };

    CETagsInput.prototype.set= function(key, value) {
        var obj= CEMap.get(this);
        obj['_'+key]= value;
    };

    CETagsInput.prototype.get= function(key) {
        var obj= CEMap.get(this);
        return obj['_'+key]||null;
    };

})();