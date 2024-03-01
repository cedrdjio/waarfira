export class BaseEntity {
  id: number = 0;
  name: string = '';
  reference: string = '';
  description: string = '';
  createdAt: string = ''; // Format de date: 'yyyy-MM-dd HH:mm:ss'

  constructor(data: Partial<BaseEntity> = {}) {
    Object.assign(this, data);
  }
}

export class DiseaseCategory extends BaseEntity {
  // Ajoutez des propriétés spécifiques à Category si nécessaire
}

export class Disease extends BaseEntity {
  // Ajoutez des propriétés spécifiques à Disease si nécessaire
}

