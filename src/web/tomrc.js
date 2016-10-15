/* Generated by Opal 0.10.2 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var TMP_23, TMP_24, TMP_25, TMP_26, TMP_27, TMP_28, self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $hash2 = Opal.hash2;

  Opal.add_stubs(['$+', '$<<', '$each', '$toErg', '$toErgArray', '$endTime', '$toErgComments', '$attr_accessor', '$<', '$length', '$==', '$[]', '$-', '$[]=', '$%', '$/', '$simplifyErgArray', '$printErgArray', '$new', '$*', '$toString']);
  (function($base, $super) {
    function $Comment(){};
    var self = $Comment = $klass($base, $super, 'Comment', $Comment);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2;

    def.time = def.text = def.duration = nil;
    Opal.defn(self, '$initialize', TMP_1 = function ːinitialize(text, $kwargs) {
      var self = this, time, duration;

      if ($kwargs == null || !$kwargs.$$is_hash) {
        if ($kwargs == null) {
          $kwargs = $hash2([], {});
        } else {
          throw Opal.ArgumentError.$new('expected kwargs');
        }
      }
      if ((time = $kwargs.$$smap['time']) == null) {
        time = 0
      }
      if ((duration = $kwargs.$$smap['duration']) == null) {
        duration = 10
      }
      self.text = text;
      self.time = time;
      return self.duration = duration;
    }, TMP_1.$$arity = -2);

    return (Opal.defn(self, '$toErg', TMP_2 = function ːtoErg(start_time) {
      var self = this;

      return "" + ($rb_plus(start_time, self.time)) + "\t" + (self.text) + "\t" + (self.duration) + "\n";
    }, TMP_2.$$arity = 1), nil) && 'toErg';
  })($scope.base, null);
  (function($base, $super) {
    function $Ramp(){};
    var self = $Ramp = $klass($base, $super, 'Ramp', $Ramp);

    var def = self.$$proto, $scope = self.$$scope, TMP_3, TMP_4, TMP_5, TMP_7;

    def.duration = def.start = def.finish = def.comments = nil;
    Opal.defn(self, '$initialize', TMP_3 = function ːinitialize($kwargs) {
      var self = this, duration, start, finish, comments;

      if ($kwargs == null || !$kwargs.$$is_hash) {
        if ($kwargs == null) {
          $kwargs = $hash2([], {});
        } else {
          throw Opal.ArgumentError.$new('expected kwargs');
        }
      }
      if (!$kwargs.$$smap.hasOwnProperty('duration')) {
        throw Opal.ArgumentError.$new('missing keyword: duration');
      }
      duration = $kwargs.$$smap['duration'];
      if (!$kwargs.$$smap.hasOwnProperty('start')) {
        throw Opal.ArgumentError.$new('missing keyword: start');
      }
      start = $kwargs.$$smap['start'];
      if (!$kwargs.$$smap.hasOwnProperty('finish')) {
        throw Opal.ArgumentError.$new('missing keyword: finish');
      }
      finish = $kwargs.$$smap['finish'];
      if ((comments = $kwargs.$$smap['comments']) == null) {
        comments = []
      }
      self.duration = duration;
      self.start = start;
      self.finish = finish;
      return self.comments = comments;
    }, TMP_3.$$arity = 1);

    Opal.defn(self, '$toErgArray', TMP_4 = function ːtoErgArray(start_time, array) {
      var self = this;

      array['$<<']([start_time, $rb_plus(start_time, self.duration), self.start, self.finish]);
      return array;
    }, TMP_4.$$arity = 2);

    Opal.defn(self, '$endTime', TMP_5 = function ːendTime(start_time) {
      var self = this;

      return $rb_plus(start_time, self.duration);
    }, TMP_5.$$arity = 1);

    return (Opal.defn(self, '$toErgComments', TMP_7 = function ːtoErgComments(start_time) {
      var $a, $b, TMP_6, self = this, out = nil;

      out = "";
      ($a = ($b = self.comments).$each, $a.$$p = (TMP_6 = function(c){var self = TMP_6.$$s || this;
if (c == null) c = nil;
      return out = $rb_plus(out, c.$toErg(start_time))}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6), $a).call($b);
      return out;
    }, TMP_7.$$arity = 1), nil) && 'toErgComments';
  })($scope.base, null);
  (function($base, $super) {
    function $Steady(){};
    var self = $Steady = $klass($base, $super, 'Steady', $Steady);

    var def = self.$$proto, $scope = self.$$scope, TMP_8;

    return (Opal.defn(self, '$initialize', TMP_8 = function ːinitialize($kwargs) {
      var $a, $b, self = this, duration, power, comments, $iter = TMP_8.$$p, $yield = $iter || nil;

      if ($kwargs == null || !$kwargs.$$is_hash) {
        if ($kwargs == null) {
          $kwargs = $hash2([], {});
        } else {
          throw Opal.ArgumentError.$new('expected kwargs');
        }
      }
      if (!$kwargs.$$smap.hasOwnProperty('duration')) {
        throw Opal.ArgumentError.$new('missing keyword: duration');
      }
      duration = $kwargs.$$smap['duration'];
      if (!$kwargs.$$smap.hasOwnProperty('power')) {
        throw Opal.ArgumentError.$new('missing keyword: power');
      }
      power = $kwargs.$$smap['power'];
      if ((comments = $kwargs.$$smap['comments']) == null) {
        comments = []
      }
      TMP_8.$$p = null;
      return ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_8, false)), $a.$$p = null, $a).call($b, $hash2(["duration", "start", "finish", "comments"], {"duration": duration, "start": power, "finish": power, "comments": comments}));
    }, TMP_8.$$arity = 1), nil) && 'initialize'
  })($scope.base, $scope.get('Ramp'));
  (function($base, $super) {
    function $Interval(){};
    var self = $Interval = $klass($base, $super, 'Interval', $Interval);

    var def = self.$$proto, $scope = self.$$scope, TMP_9, TMP_11, TMP_13, TMP_16;

    def.components = def.comments = nil;
    Opal.defn(self, '$initialize', TMP_9 = function ːinitialize($kwargs) {
      var self = this, components, comments;

      if ($kwargs == null || !$kwargs.$$is_hash) {
        if ($kwargs == null) {
          $kwargs = $hash2([], {});
        } else {
          throw Opal.ArgumentError.$new('expected kwargs');
        }
      }
      if (!$kwargs.$$smap.hasOwnProperty('components')) {
        throw Opal.ArgumentError.$new('missing keyword: components');
      }
      components = $kwargs.$$smap['components'];
      if ((comments = $kwargs.$$smap['comments']) == null) {
        comments = []
      }
      self.components = components;
      return self.comments = comments;
    }, TMP_9.$$arity = 1);

    Opal.defn(self, '$toErgArray', TMP_11 = function ːtoErgArray(start_time, array) {
      var $a, $b, TMP_10, self = this;

      ($a = ($b = self.components).$each, $a.$$p = (TMP_10 = function(c){var self = TMP_10.$$s || this;
if (c == null) c = nil;
      array = c.$toErgArray(start_time, array);
        return start_time = c.$endTime(start_time);}, TMP_10.$$s = self, TMP_10.$$arity = 1, TMP_10), $a).call($b);
      return array;
    }, TMP_11.$$arity = 2);

    Opal.defn(self, '$endTime', TMP_13 = function ːendTime(start_time) {
      var $a, $b, TMP_12, self = this;

      ($a = ($b = self.components).$each, $a.$$p = (TMP_12 = function(c){var self = TMP_12.$$s || this;
if (c == null) c = nil;
      return start_time = c.$endTime(start_time)}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12), $a).call($b);
      return start_time;
    }, TMP_13.$$arity = 1);

    return (Opal.defn(self, '$toErgComments', TMP_16 = function ːtoErgComments(start_time) {
      var $a, $b, TMP_14, $c, TMP_15, self = this, out = nil;

      out = "";
      ($a = ($b = self.comments).$each, $a.$$p = (TMP_14 = function(c){var self = TMP_14.$$s || this;
if (c == null) c = nil;
      return out = $rb_plus(out, c.$toErg(start_time))}, TMP_14.$$s = self, TMP_14.$$arity = 1, TMP_14), $a).call($b);
      ($a = ($c = self.components).$each, $a.$$p = (TMP_15 = function(c){var self = TMP_15.$$s || this;
if (c == null) c = nil;
      out = $rb_plus(out, c.$toErgComments(start_time));
        return start_time = c.$endTime(start_time);}, TMP_15.$$s = self, TMP_15.$$arity = 1, TMP_15), $a).call($c);
      return out;
    }, TMP_16.$$arity = 1), nil) && 'toErgComments';
  })($scope.base, null);
  (function($base, $super) {
    function $Workout(){};
    var self = $Workout = $klass($base, $super, 'Workout', $Workout);

    var def = self.$$proto, $scope = self.$$scope, TMP_17, TMP_18, TMP_19, TMP_21, TMP_22;

    def.version = def.units = def.description = def.filename = def.power = nil;
    self.$attr_accessor("version", "units", "description", "filename", "power");

    (Opal.cvars['@@__workout_instance'] = nil);

    Opal.defn(self, '$initialize', TMP_17 = function ːinitialize($kwargs) {
      var $a, $b, self = this, components, comments, version, units, description, filename, power, $iter = TMP_17.$$p, $yield = $iter || nil;

      if ($kwargs == null || !$kwargs.$$is_hash) {
        if ($kwargs == null) {
          $kwargs = $hash2([], {});
        } else {
          throw Opal.ArgumentError.$new('expected kwargs');
        }
      }
      if (!$kwargs.$$smap.hasOwnProperty('components')) {
        throw Opal.ArgumentError.$new('missing keyword: components');
      }
      components = $kwargs.$$smap['components'];
      if ((comments = $kwargs.$$smap['comments']) == null) {
        comments = []
      }
      if ((version = $kwargs.$$smap['version']) == null) {
        version = 2
      }
      if ((units = $kwargs.$$smap['units']) == null) {
        units = "ENGLISH"
      }
      if ((description = $kwargs.$$smap['description']) == null) {
        description = "A description"
      }
      if ((filename = $kwargs.$$smap['filename']) == null) {
        filename = "blah.mrc"
      }
      if ((power = $kwargs.$$smap['power']) == null) {
        power = "PERCENT"
      }
      TMP_17.$$p = null;
      ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_17, false)), $a.$$p = null, $a).call($b, $hash2(["components", "comments"], {"components": components, "comments": comments}));
      (Opal.cvars['@@__workout_instance'] = self);
      self.version = version;
      self.units = units;
      self.description = description;
      self.filename = filename;
      return self.power = power;
    }, TMP_17.$$arity = 1);

    Opal.defs(self, '$instance', TMP_18 = function ːinstance() {
      var $a, self = this;

      return (($a = Opal.cvars['@@__workout_instance']) == null ? nil : $a);
    }, TMP_18.$$arity = 0);

    Opal.defn(self, '$simplifyErgArray', TMP_19 = function ːsimplifyErgArray(array) {
      var $a, $b, $c, $d, self = this, current = nil, lookingAt = nil, toRemove = nil;

      current = 0;
      lookingAt = 1;
      toRemove = [];
      while ((($b = (($c = $rb_lt(current, array.$length()), $c !== false && $c !== nil && $c != null ?$rb_lt(lookingAt, array.$length()) : $c))) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
      if ((($b = (($c = (($d = array['$[]'](current)['$[]'](2)['$=='](array['$[]'](current)['$[]'](3))) ? array['$[]'](current)['$[]'](2)['$=='](array['$[]'](lookingAt)['$[]'](2)) : array['$[]'](current)['$[]'](2)['$=='](array['$[]'](current)['$[]'](3))), $c !== false && $c !== nil && $c != null ?array['$[]'](current)['$[]'](2)['$=='](array['$[]'](lookingAt)['$[]'](3)) : $c))) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        toRemove['$<<'](array['$[]'](lookingAt));
        lookingAt = $rb_plus(lookingAt, 1);
      } else if ((($b = ($rb_lt(current, ($rb_minus(lookingAt, 1))))) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        array['$[]'](current)['$[]='](1, array['$[]'](lookingAt)['$[]'](0));
        current = lookingAt;
        lookingAt = $rb_plus(current, 1);
        } else {
        current = lookingAt;
        lookingAt = $rb_plus(current, 1);
      }};
      array = $rb_minus(array, toRemove);
      return array;
    }, TMP_19.$$arity = 1);

    Opal.defn(self, '$printErgArray', TMP_21 = function ːprintErgArray(array) {
      var $a, $b, TMP_20, self = this, out = nil;

      out = "";
      ($a = ($b = array).$each, $a.$$p = (TMP_20 = function(a){var self = TMP_20.$$s || this;
if (a == null) a = nil;
      return out = $rb_plus(out, "" + ("%.02f"['$%'](($rb_divide(a['$[]'](0), 60.0)))) + "\t" + (a['$[]'](2)) + "\n" + ("%.02f"['$%'](($rb_divide(a['$[]'](1), 60.0)))) + "\t" + (a['$[]'](3)) + "\n")}, TMP_20.$$s = self, TMP_20.$$arity = 1, TMP_20), $a).call($b);
      return out;
    }, TMP_21.$$arity = 1);

    return (Opal.defn(self, '$toString', TMP_22 = function ːtoString() {
      var self = this, array = nil, output = nil;

      array = self.$toErgArray(0, []);
      array = self.$simplifyErgArray(array);
      output = "[COURSE HEADER]\nVERSION\t=\t" + (self.version) + "\nUNITS\t=\t" + (self.units) + "\nDESCRIPTION\t=\t" + (self.description) + "\nFILE NAME\t=\t" + (self.filename) + "\nMINUTES\t" + (self.power) + "\n[END COURSE HEADER]\n[COURSE DATA]\n";
      output = $rb_plus(output, self.$printErgArray(array));
      output = $rb_plus(output, "[END COURSE DATA]\n");
      output = $rb_plus(output, "[COURSE TEXT]\n");
      output = $rb_plus(output, self.$toErgComments(0));
      output = $rb_plus(output, "[END COURSE TEXT]\n");
      return output;
    }, TMP_22.$$arity = 0), nil) && 'toString';
  })($scope.base, $scope.get('Interval'));
  Opal.defn(Opal.Object, '$steady', TMP_23 = function ːsteady($kwargs) {
    var self = this, duration, power, comments;

    if ($kwargs == null || !$kwargs.$$is_hash) {
      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      } else {
        throw Opal.ArgumentError.$new('expected kwargs');
      }
    }
    if (!$kwargs.$$smap.hasOwnProperty('duration')) {
      throw Opal.ArgumentError.$new('missing keyword: duration');
    }
    duration = $kwargs.$$smap['duration'];
    if (!$kwargs.$$smap.hasOwnProperty('power')) {
      throw Opal.ArgumentError.$new('missing keyword: power');
    }
    power = $kwargs.$$smap['power'];
    if ((comments = $kwargs.$$smap['comments']) == null) {
      comments = []
    }
    return $scope.get('Steady').$new($hash2(["duration", "power", "comments"], {"duration": duration, "power": power, "comments": comments}));
  }, TMP_23.$$arity = 1);
  Opal.defn(Opal.Object, '$ramp', TMP_24 = function ːramp($kwargs) {
    var self = this, duration, start, finish, comments;

    if ($kwargs == null || !$kwargs.$$is_hash) {
      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      } else {
        throw Opal.ArgumentError.$new('expected kwargs');
      }
    }
    if (!$kwargs.$$smap.hasOwnProperty('duration')) {
      throw Opal.ArgumentError.$new('missing keyword: duration');
    }
    duration = $kwargs.$$smap['duration'];
    if (!$kwargs.$$smap.hasOwnProperty('start')) {
      throw Opal.ArgumentError.$new('missing keyword: start');
    }
    start = $kwargs.$$smap['start'];
    if (!$kwargs.$$smap.hasOwnProperty('finish')) {
      throw Opal.ArgumentError.$new('missing keyword: finish');
    }
    finish = $kwargs.$$smap['finish'];
    if ((comments = $kwargs.$$smap['comments']) == null) {
      comments = []
    }
    return $scope.get('Ramp').$new($hash2(["duration", "start", "finish", "comments"], {"duration": duration, "start": start, "finish": finish, "comments": comments}));
  }, TMP_24.$$arity = 1);
  Opal.defn(Opal.Object, '$interval', TMP_25 = function ːinterval(components, $kwargs) {
    var self = this, comments;

    if ($kwargs == null || !$kwargs.$$is_hash) {
      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      } else {
        throw Opal.ArgumentError.$new('expected kwargs');
      }
    }
    if ((comments = $kwargs.$$smap['comments']) == null) {
      comments = []
    }
    return $scope.get('Interval').$new($hash2(["components", "comments"], {"components": components, "comments": comments}));
  }, TMP_25.$$arity = -2);
  Opal.defn(Opal.Object, '$comment', TMP_26 = function ːcomment(c, $kwargs) {
    var self = this, time, duration;

    if ($kwargs == null || !$kwargs.$$is_hash) {
      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      } else {
        throw Opal.ArgumentError.$new('expected kwargs');
      }
    }
    if ((time = $kwargs.$$smap['time']) == null) {
      time = 0
    }
    if ((duration = $kwargs.$$smap['duration']) == null) {
      duration = 10
    }
    return $scope.get('Comment').$new(c, $hash2(["time", "duration"], {"time": time, "duration": duration}));
  }, TMP_26.$$arity = -2);
  Opal.defn(Opal.Object, '$repeat', TMP_27 = function ːrepeat(thing, times) {
    var self = this;

    return $scope.get('Interval').$new($hash2(["components"], {"components": $rb_times([thing], times)}));
  }, TMP_27.$$arity = 2);
  return (Opal.defn(Opal.Object, '$workout', TMP_28 = function ːworkout(components, $kwargs) {
    var self = this, version, units, description, filename, power, comments, w = nil;

    if ($kwargs == null || !$kwargs.$$is_hash) {
      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      } else {
        throw Opal.ArgumentError.$new('expected kwargs');
      }
    }
    if ((version = $kwargs.$$smap['version']) == null) {
      version = 2
    }
    if ((units = $kwargs.$$smap['units']) == null) {
      units = "ENGLISH"
    }
    if ((description = $kwargs.$$smap['description']) == null) {
      description = "A description"
    }
    if ((filename = $kwargs.$$smap['filename']) == null) {
      filename = "blah.mrc"
    }
    if ((power = $kwargs.$$smap['power']) == null) {
      power = "PERCENT"
    }
    if ((comments = $kwargs.$$smap['comments']) == null) {
      comments = []
    }
    w = $scope.get('Workout').$new($hash2(["components", "comments", "version", "units", "description", "filename", "power"], {"components": components, "comments": comments, "version": version, "units": units, "description": description, "filename": filename, "power": power}));
    return w.$toString();
  }, TMP_28.$$arity = -2), nil) && 'workout';
})(Opal);

/* Generated by Opal 0.10.2 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);
