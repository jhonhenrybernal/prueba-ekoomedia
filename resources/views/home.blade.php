@extends('layout')
<div id="menu"></div>
<div class="container">
    <div class="row">
        <div class="center-text">
            Bienvenidos a mi test
        </div>
         <div id="init"></div>
    </div>
    <h2>Lista</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Celular</th>
          <th>edad</th>
        </tr>
      </thead>
      <tbody>
        @foreach ($client as $list)
        <tr>
            <td>{{$list->name}}</td>
            <td>{{$list->email}}</td>
            <td>{{$list->celular}}</td>
            <td>{{$list->edad}}</td>
        </tr>
        @endforeach
      </tbody>
    </table>
</div>

</body>
</html>

