1- Indica en un archivo de texto, puede ser un md, (escrito a mano) que permisos tienen los siguientes modos:
   USR GRP ROOT(Resto del mundo)
   * 0o333 
   -xw -xw -xw = 
   Todos tienen permiso de Escritura y ejecución menos de lectura para todos
   * 0o700
   rxw --- ---
   Solo los owner tienen todos los permisos
   * 0o755
    rxw r-x r-x 
    USER tiene todos los permisos, el GRP y el ROOT tiene de lectura y ejecución
   * 0o111 = 
   --x --x --x Todos tienen permiso de ejecución
   Lectura, escritura y ejecución 
   * 0o600 = 
   rw- --- --- Solo el owner tiene permiso de lectura y escritura
   * 0o934 
   No existe da error
   * 0o463 
   r-- rw- -wx
   USER: Lectura 
   GRP: Lectura y escritura
   ROOT: Escritura y ejecución
